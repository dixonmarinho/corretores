export class StrategiesDto {
  code: string;
  strategy_type: string;
  name: string;
  description: string | null;
  is_singleton: boolean;
  fallback_enabled: boolean | null;
  is_active: boolean | null;
}
