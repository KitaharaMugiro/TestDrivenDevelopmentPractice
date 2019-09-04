import { Repository } from "./Repository";

export class Usecase {
  repository = new Repository();

  getMaskedReview(id: number): string {
    const review = this.repository.getReview(id);
    return "";
  }
}
