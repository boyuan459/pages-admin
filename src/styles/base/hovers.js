const hovers = `
  .hvr-shadow {
    box-shadow: 0 0 0 transparent;
    transition: 0.3s box-shadow ease-in-out;
    transform: perspective(1px) translateZ(0);
    &:hover, &:focus, &:active {
      box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    }
  }
  .hvr-shadow-2 {
    box-shadow: 0 0 0 transparent;
    transition: 0.3s box-shadow ease-in-out;
    &:hover, &:focus, &:active {
      box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.9);
    }
  }
`

export default hovers
