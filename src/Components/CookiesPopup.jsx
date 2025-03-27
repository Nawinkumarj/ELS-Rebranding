const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const manageCookies = () => {
    navigate('/cookies-settings');  // Navigate to the custom cookies settings page
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="cookiesPopup"
        >
          <h3>Our website uses cookies</h3>
          <p>
            Our website uses cookies. By continuing, we assume your permission to deploy cookies as detailed in our{" "}
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </p>
          <div className='cookiesBtn flex-center'>
            <button onClick={acceptCookies} className='acceptBtn'>
              Accept all
            </button>
            <button onClick={manageCookies}>
              Manage
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
