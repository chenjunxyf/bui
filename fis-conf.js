/**
 * build 配置 test
 */

// 设置此项目的依赖项【目录最后不要加斜杠 支持单个文件（夹）和子文件（夹）】
fis.set( 'project.dependencies', [
    // '../tt_common'
] );

// 静态资源前缀 默认：resource/${currentProject}$0
// fis.set( 'build.staticPrefix', 'xxstatic' );
// // 模板前缀 默认：template/${currentProject}$0
// fis.set( 'build.tplPrefix', 'ootpl' );

// // 上线静态资源域名设置【默认已经设置】
// fis.set( 'build.staticDomain', [
//     'http://s0.pstatp.com',
//     'http://s2.pstatp.com'
// ] );
// fis.media( 'xiayi' ).match( '*.{js,less,scss,css,png,jpg,jpeg,gif,es6}', {
//     useHash: false,
//     domain: null,
//     release:"/static/resource/forum_wap/"+"$0"
// },100);
// 

fis.set( 'project.ignore',
    fis.get( 'project.ignore' ).concat( [
        '/config/**',
        '/fat-*.js',
        '/fis-*.js',
        '/*.md',
        '/*.txt',
        '/**/*.md',
        '/**/*.txt',
        '/.watchingignore',
        '/build/**',
        '/mock/**',
        'node_modules'
    ] ) );
