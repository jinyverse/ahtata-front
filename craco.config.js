const CracoAlias = require('craco-alias');

// 절대경로 "@/*" 설정을 위한 craco 설정
module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                tsConfigPath: 'tsconfig.paths.json',
            },
        },
    ],
};
