module.exports = {
    port: 8001,
    build: {
        on: true,
        tool: 'fis3b'
    },
    proxy: [
        {
            name: '推荐页',
            rule: /\/ttdiscuss\/v1\/brow\/feed\//,
            target: '/page/main.html'
        }
    ],
    workers: [
        {
            on: false,
            command: 'riot',
            args: ['-w', 'tags', 'tags']
        }
    ]
}