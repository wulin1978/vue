<template>
  <div>
    <rightslot>
      <div slot='title'>Vue安装与配置</div>
      <div slot='content'>
        <h4>安装前配置</h4>
        <ol>
          <li>安装node.js：从<a href='https://nodejs.org/en/' target="_blank">node.js官网</a>下载并安装node，安装过程很简单，一路“下一步”就可以了（傻瓜式安装）。安装完成之后，打开命令行工具(win+r，然后输入cmd)或者是Git Bash Here（前提是要已经安装Git），输入<span v-import>node -v</span>，如果出现相应的版本号，则说明安装成功。下载安装node.js后，就已经自带npm（包管理工具）了。</li>
          <li>安装webpack：在命令行工具中输入<span v-import>npm install webpack -g</span>回车安装webpack，安装完成之后输入<span v-import>webpack -v</span>，如果出现相应的版本号，则说明安装成功。</li>
        </ol>
      <h4>安装方法一（完全安装）</h4>
        <ol>
          <li>安装vue-cli脚手架构建工具：打开命令行工具输入<span v-import>npm install vue-cli -g</span>，安装完成之后输入<span v-import>vue -V</span>（注意这里是大写的“V”），如果出现相应的版本号，则说明安装成功。</li>
          <li>用脚手架构建项目：在命令行中进入存放项目的文件夹，并输入<span v-import>vue init webpack demo</span>，这里的“demo” 是项目的名称可以说是随便的起名。接下来命令行中会出现一系列问题让你选择，建议全选yes。</li>
          <li>安装依赖：先进入项目<span v-import>cd demo</span>，然后安装依赖<span v-import>npm install</span>，因为自动构建过程中已存在package.json文件，所以这里直接安装依赖就行。</li>
          <li>安装sass依赖：用vue-cli构建项目时安装的依赖并不包括sass，如果在项目中需要用sass还需单独安装，在命令行输入<span v-import>npm install sass-loader node-sass --save-dev</span>，打开配置文件 build/webpack.base.conf.js，在rules中插入如下代码:：<pre><code v-highlight>    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },</code></pre>完成配置后，在项目中<span v-import>&ltstyle&gt</span>标签要改成<span v-import>&ltstyle lang='scss'&gt</span>，引入外部css使用如下代码：<pre><code v-highlight>@import  "./common/scss/mixin";</code></pre></li>
        </ol>
      <h4>安装方法二（复制拷贝）</h4>
      如果以前已经已经通过方法一安装过vue的就不需要重复安装，只需要用方法一安装一个模板，以后新建项目的时候复制这个模板就可以了。
        <ol>
          <li>复制模板：把通过方法一安装的模板复制到新项目所在文件夹。</li>
          <li>修改项目名称：把复制的模板名称改为新项目名称。</li>
          <li>在命令行工具或Git Bash Here中进入项目文件夹，并使用<span v-import>npm install</span>命令安装依赖。</li>
        </ol>
      <h4>使用说明</h4>
        <ul>
          <li>使用vue-cli安装完成后形成的文件及文件夹说明如下：<br>
            <img src='../../../assets/vuefile.png'></li>
          <li>启动项目：在命令行工具或Git Bash Here中输入命令<span v-import>npm run dev</span>以启动项目，从默认的浏览器打开的页面地址可以看到此时的端口是 8080，要修改端口需要打开 config/index.js 文件，将该文件中的<span v-import>port: 8080,</span>中的8080改为其他数字即可。</li>
          <li>构建项目：在命令行工具或Git Bash Here中输入命令<span v-import>npm run build</span>以构建项目，构建好的代码存放在文件夹 build 中，这里的代码就是最终在浏览器运行的代码，也就是最后交给客户的代码。</li>
        </ul>
      </div>
    </rightslot>
  </div>
</template>
<script>
    import rightslot from '@/components/rightslot'
    export default {
      components: {
        rightslot
      }
    }
</script>