import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action: () => void;
  isDisabled?: boolean;
}

const Button = ({ text, action, isDisabled }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className="button" onClick={action} disabled={isDisabled}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
