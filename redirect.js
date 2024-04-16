import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function tryRedirect() {
  if (location.host.includes('learn.')) {
    return;
  }

  let path = location.pathname;

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  location.replace(`https://redis.io/learn${path}`);
}

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({ location }) {
      console.log(location);

      tryRedirect();
      setTimeout(tryRedirect, 50);
      setTimeout(tryRedirect, 150);
      setTimeout(tryRedirect, 250);
      setTimeout(tryRedirect, 350);
      setTimeout(tryRedirect, 450);
      setTimeout(tryRedirect, 550);
      setTimeout(tryRedirect, 650);
      setTimeout(tryRedirect, 750);
      setTimeout(tryRedirect, 850);
      setTimeout(tryRedirect, 950);
      setTimeout(tryRedirect, 1050);
    },
  };
})();
