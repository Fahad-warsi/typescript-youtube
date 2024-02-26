interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface short {
  createshort(): void;
}

class instagram implements takePhoto, short {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  createshort(): void {
    console.log("short was created");
  }
}
