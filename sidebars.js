module.exports = {

  mainSideBar: {
    Home: [{
      type: 'link',
      label: 'Home', // The label that should be displayed (string).
      href: '/' // The target URL (string).
    }],
    Create: [ 'create/cloud/index-cloud', 'create/docker/index-docker', 'create/resoftware/index-software' ],
    Develop: ['develop/java/index-java', 'develop/node/index-node', 'develop/python/index-python', 'develop/golang/index-golang' ],
    'Tools & Guides': ['tools/index-tools','guides/index-guides'],
  },
};
