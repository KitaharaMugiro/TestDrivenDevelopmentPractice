import * as chai from "chai";
import sinon from "sinon";
import { Usecase } from "../../src/Mock/Usecase";

describe("Mockのテスト", () => {
  it("レビューの最初の10文字だけを取得したい", () => {
    //arrange
    const id = 1;
    const usecase = new Usecase();

    //act
    const maskedMask = usecase.getMaskedReview(id);

    //assert
    //?
  });
});
