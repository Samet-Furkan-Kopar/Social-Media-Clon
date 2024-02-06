import { Box } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: ${(props) =>
    props.bg
      ? `url('https://picsum.photos/id/37/800/800')`
      : "rgba(255, 255, 255, 0.5)"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default StyledBox;
