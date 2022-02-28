import { render, fireEvent, screen } from "@testing-library/react";
import Calculator, { calculateExpression } from "./Calculator";

describe("Calculator", () => {
  describe("calculateExpression", () => {
    it("adds two numbers together", () => {
      expect(calculateExpression("6", "2", "+")).toEqual(8);
    });

    it("will divide two numbers", () => {
      expect(calculateExpression("6", "2", "/")).toEqual(3);
    });

    it("will multiply two numbers", () => {
      expect(calculateExpression("6", "2", "*")).toEqual(12);
    });

    it("will subtract two numbers", () => {
      expect(calculateExpression("6", "2", "-")).toEqual(4);
    });
  });

  describe("<Calculator/>", () => {
    describe("operations", () => {
      it("should let you add two numbers together", () => {
        render(<Calculator />);

        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("current-expression")).toHaveTextContent("3");
      });
      it("should let you multiply two numbers together", () => {
        render(<Calculator />);

        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("×"));
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("current-expression")).toHaveTextContent("8");
      });
      it("should let you divide two numbers", () => {
        render(<Calculator />);

        fireEvent.click(screen.getByText("6"));
        fireEvent.click(screen.getByText("÷"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("current-expression")).toHaveTextContent("3");
      });
      it("should let you subtract two numbers", () => {
        render(<Calculator />);

        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("-"));
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("current-expression")).toHaveTextContent("4");
      });
      it("should let you add two numbers together and then multiply the sum by 2", () => {
        render(<Calculator />);

        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        fireEvent.click(screen.getByText("×"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("current-expression")).toHaveTextContent("6");
      });
    });
    describe("actions", () => {
      it("should let you delete the last typed value", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("5"));
        expect(screen.getByTestId("current-expression")).toHaveTextContent(
          "25"
        );
        fireEvent.click(screen.getByText("DEL"));
        expect(screen.getByTestId("stored-expression")).toHaveTextContent(
          "1 +"
        );
        expect(screen.getByTestId("current-expression")).toHaveTextContent("2");
      });
      it("should let you clear your expression", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("5"));
        expect(screen.getByTestId("current-expression")).toHaveTextContent(
          "25"
        );
        fireEvent.click(screen.getByText("AC"));
        expect(screen.getByTestId("stored-expression")).toHaveTextContent("");
        expect(screen.getByTestId("current-expression")).toHaveTextContent("");
      });
    });
  });
});
