export class CreateUserDto {
  readonly firstName: string;
  readonly middleName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly tracks: number[];
}
