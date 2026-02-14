import { Profiles } from './profiles.entity';

export class Roles {
  id: string;
  name: string;
  profiles?: Profiles[];
}
