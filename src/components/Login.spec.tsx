import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import Api from "../services/Api";

describe("Login", () => {
  it("Makes and API call with the correct parameters", () => {
    const onLogin = jest.fn();
    jest.spyOn(Api, "login").mockResolvedValueOnce(true);
    render(<Login onLogin={onLogin} />);

    fireEvent.change(screen.getByLabelText(/E-Mail/), {
      target: { value: "user@example.org" },
    });
    fireEvent.change(screen.getByLabelText(/Passwort/), {
      target: { value: "hunter2" },
    });
    fireEvent.click(screen.getByText(/Einloggen/));

    expect(Api.login).toHaveBeenCalledWith("user@example.org", "hunter2");
  });
});
