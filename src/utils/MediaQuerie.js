import { generateMedia } from "styled-media-query";

export const mediaQueries = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});
