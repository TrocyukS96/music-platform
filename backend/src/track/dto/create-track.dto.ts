export class CreateTrackDto {
  readonly name: string;
  readonly musician: string;
  readonly description: string;
  readonly picture: string;
  readonly audio: {
    id: number;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: string;
    buffer: Buffer;
  };
}
