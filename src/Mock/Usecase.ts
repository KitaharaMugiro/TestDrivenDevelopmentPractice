import { Repository } from "./Repository";

export class Usecase {
  repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  getMaskedReview(id: number): string {
    const review = this.repository.getReview(id);
    const maskedReview = review.substr(0, 10);
    return maskedReview;
  }
}
