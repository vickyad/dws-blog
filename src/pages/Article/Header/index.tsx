import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import Icon from "../../../components/Icons";
import { Container, Title } from "./styles";
import { useEffect, useState } from "react";

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  return (
    <>
      {isMobile ? (
        <Container>
          <Button handleClick={() => navigate(-1)}>
            <Icon variant="arrow" /> Back
          </Button>
          <Title>{title}</Title>
        </Container>
      ) : (
        <>
          <Button handleClick={() => navigate(-1)}>
            <Icon variant="arrow" /> Back
          </Button>
          <Title>{title}</Title>
        </>
      )}
    </>
  );
};
export default Header;
