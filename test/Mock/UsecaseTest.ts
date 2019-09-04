import * as chai from "chai";
import sinon from "sinon";
import { Usecase } from "../../src/Mock/Usecase";
import { Repository } from "../../src/Mock/Repository";

describe("Mockのテスト", () => {
  let usecase: Usecase;

  beforeEach(() => {
    const repository = new Repository();
    const stub = sinon.stub(repository, "getReview");
    stub.withArgs(1).returns("I have a pen. If you know more about it...");
    usecase = new Usecase(repository);
  });

  it("レビューの最初の10文字だけを取得したい", () => {
    //arrange
    const id = 1;
    const expected = "I have a p";

    //act
    const maskedMask = usecase.getMaskedReview(id);

    //assert
    chai.assert.equal(maskedMask, expected);
  });
});
