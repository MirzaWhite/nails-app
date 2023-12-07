import { ButtonStyled } from "./Button.styled";

export const ContainedButton = ({
  bg_color,
  radious,
  padding,
  width,
  color,
  active_bg_color,
  disabled_bg_color,
  disabled,
  fontSize,
  lineHeight,
  border_color,
  children,
  onClick,
  CustomclassName,
}) => {
  return (
    <ButtonStyled
      bg_color={bg_color}
      radious={radious}
      padding={padding}
      width={width}
      color={color}
      active_bg_color={active_bg_color}
      disabled_bg_color={disabled_bg_color}
      disabled={disabled}
      fontSize={fontSize}
      lineheight={lineHeight}
      border_color={border_color}
      className={`d-flex justify-content-center align-items-center ${CustomclassName}`}
      onClick={onClick}
    >
      {children}{" "}
    </ButtonStyled>
  );
};
