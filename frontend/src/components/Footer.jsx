function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>

      <h5 style = {{backgroundColor: 'red', color:'white'}}>footer works {year}</h5>
    </footer>
  );
}

export default Footer;