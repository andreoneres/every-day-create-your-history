function RenderIf( { isTrue, children } ) {
  return isTrue ? children : null;
}

export { RenderIf }; 