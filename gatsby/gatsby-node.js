const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
    const { createNode } = boundActionCreators;

    const fetchInstalls = () => axios.get('http://plugco.in/installs');
    const fetchInstalls5Min = () => axios.get('http://plugco.in/installs_5_min');

    const installsRes = await fetchInstalls();
    const installs5MinRes = await fetchInstalls5Min();
    
    console.log(installsRes.data.count);
    console.log(installs5MinRes.data.count);

    const installNode = {
        id: '1',
        parent: '__SOURCE__',
        internal: {
            type: 'Installs',
        },
        children: [],

        installs: installsRes.data.count,
        installs_5_min: installs5MinRes.data.count,
    }

    const installContentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(installNode))
        .digest(`hex`);
    installNode.internal.contentDigest = installContentDigest;
    createNode(installNode);

    return;
}