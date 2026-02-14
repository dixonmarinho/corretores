import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';

type AiProvider = 'auto' | 'openai' | 'gemini';

interface GenerateTextInput {
  prompt: string;
  provider?: AiProvider;
  temperature?: number;
  maxTokens?: number;
}

@Injectable()
export class AiService {
  async generateText(input: GenerateTextInput) {
    const provider = input.provider ?? 'auto';
    const prompt = input.prompt?.trim();

    if (!prompt) {
      throw new BadRequestException('O campo prompt é obrigatório.');
    }

    if (provider === 'openai') {
      return this.generateWithOpenAi(prompt, input.temperature, input.maxTokens);
    }

    if (provider === 'gemini') {
      return this.generateWithGemini(prompt, input.temperature, input.maxTokens);
    }

    const errors: string[] = [];

    try {
      return await this.generateWithOpenAi(
        prompt,
        input.temperature,
        input.maxTokens,
      );
    } catch (error) {
      errors.push(`OpenAI: ${(error as Error).message}`);
    }

    try {
      return await this.generateWithGemini(
        prompt,
        input.temperature,
        input.maxTokens,
      );
    } catch (error) {
      errors.push(`Gemini: ${(error as Error).message}`);
    }

    throw new ServiceUnavailableException(
      `Nenhum provedor de IA respondeu com sucesso. ${errors.join(' | ')}`,
    );
  }

  private async generateWithOpenAi(
    prompt: string,
    temperature = 0.7,
    maxTokens = 512,
  ) {
    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini';

    if (!apiKey) {
      throw new ServiceUnavailableException(
        'OPENAI_API_KEY não configurada no .env',
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: prompt }],
        temperature,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new ServiceUnavailableException(
        `Erro na OpenAI (${response.status}): ${message}`,
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const text = data.choices?.[0]?.message?.content?.trim();

    if (!text) {
      throw new ServiceUnavailableException(
        'OpenAI não retornou conteúdo no texto.',
      );
    }

    return {
      provider: 'openai' as const,
      model,
      text,
    };
  }

  private async generateWithGemini(
    prompt: string,
    temperature = 0.7,
    maxTokens = 512,
  ) {
    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL ?? 'gemini-2.0-flash';

    if (!apiKey) {
      throw new ServiceUnavailableException(
        'GEMINI_API_KEY não configurada no .env',
      );
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature,
          maxOutputTokens: maxTokens,
        },
      }),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new ServiceUnavailableException(
        `Erro no Gemini (${response.status}): ${message}`,
      );
    }

    const data = (await response.json()) as {
      candidates?: Array<{
        content?: { parts?: Array<{ text?: string }> };
      }>;
    };

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!text) {
      throw new ServiceUnavailableException(
        'Gemini não retornou conteúdo no texto.',
      );
    }

    return {
      provider: 'gemini' as const,
      model,
      text,
    };
  }
}
