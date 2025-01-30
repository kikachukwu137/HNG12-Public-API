

import User from"../model/user.model.js";

export const getUserInfo = () => {
  return {
    email: User.email,
    current_datetime: new Date().toISOString(),
    github_url: User.github_url,
  };
};


