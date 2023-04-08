import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  icon?: JSX.Element;
  action: () => void;
  isDisabled?: boolean;
}

const Button = ({
  text,
  icon,
  action,
  isDisabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className="button" onClick={action} disabled={isDisabled}>
      {text}
      {icon}
    </ButtonStyled>
  );
};

export default Button;
