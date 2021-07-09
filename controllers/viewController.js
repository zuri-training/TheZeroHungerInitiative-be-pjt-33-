const login = (req, res) => {
  res.status(200).render('login');
};

const signup = (req, res) => {
  res.status(200).render('signup');
};

const forgotPassword = (req, res) => {
  res.status(200).render('forgot-password');
};

const resetPassword = (req, res) => {
  res.status(200).render('reset-password');
};

const forgotPasswordSuccess = (req, res) => {
  res.status(200).render('forgot-password-success');
};

const home = (req, res) => {
  res.status(200).render('home/index');
}

const team = (req, res) => {
  res.status(200).render('home/our-team', {title: 'Our Team'});
};
 
const volunteer = (req, res) => {
  res.status(200).render('home/volunteer-signup', {title: 'Become a volunteer'});
};
const about = (req, res) => {
  res.status(200).render('home/about-us', {title: 'About Us'});
};

const donorDashboard = (req, res) => {
  // Get donor dashboard data & add them to the context variable
  // Right now, only static data is being shown to the user
  const context = {
    activePage: 'dashboard', // By default
    user: JSON.parse(JSON.stringify(req.user))
  }

  switch (req.page) {
    case 'donations':
      context.activePage = 'donations';
      res.status(200).render('donor/donations', context);
      break;
    default:
      res.status(200).render('donor/dashboard', context);
      break;
  }
}

const verifyMonetaryDonation = (req, res) => {
  res.status(200).render('donor/verify-monetary-donation');
}

module.exports = {
  login,
  signup,
  forgotPassword,
  resetPassword,
  forgotPasswordSuccess,
  home,
  team,
  volunteer,
  about,
  donorDashboard,
  verifyMonetaryDonation
};