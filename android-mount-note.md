app-react-native-android环境搭建就是一个大坑。

react-native init appXiao   
初始化项目，其实就是下载文件啦，没什么可说的。咦，好像是用yarn安装，facebook也是任人唯亲啊。

cd appXiao

react-native run-android   
进入漫长的下载相关文件及编译的过程，大都数时候下载会一直被墙...........Fuck GFW！！！但是，看运气吧，万一你丫运气好的令人发指呢。特么谁知道呢！

BUILD FAILED
* What went wrong:
A problem occurred evaluating project ':app'.
> SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.
怎么解决这个问题呢？
在android目录的根目录新建文件：local.properties，内容是：sdk.dir=C\:\\Users\\xiao\\AppData\\Local\\Android\\Sdk  
好了，可以了，再来react-native run-android，你会看到一长串的英文app啥的，反正我也没仔细看懂。

BUILD SUCCESSFUL
靠，搞定啦啊啊啊啊啊啊啊啊啊啊啊，赶快奔走相告慰我们为了搭建环境而逝去的青春和远去妹纸啊啊啊啊啊啊啊啊啊。。。。。哦，sorry，它们都已经走远了，再也不会回来了。

收拾好心酸后，在模拟器中，你心情飘扬的轻轻点了appXiao，眉宇间一片苍茫、胸中红血如潮、两眼放光芒四射，见证错误的时刻到了！于是你看到了红底白字的错误弹出框：Could not get BatchedBridge, make sure your bundle is packaged correctly。Excuse me，what? 逗我玩儿吧。
怎么办？
react-native start
然后在激动一下，哦不，应该是抖动一下模拟器，激动不？但仍然是一片红色的错误框，只是文字变成了：Could not connect to development server。。。。。其实，看到这个我就稍微放心了点，而且居然还有点傲娇了，development，开发啊，多么高大上的东西，那么只要跨过这片红色弹出框，我就是reactnative的开发者了啊，光想想就已经很激动了，这就是我的梦想啊，啊，终于差点要实现了。。。。。。。。。。。。。。。。。。。。(这里省去很多点)

怎么办？
重新抖动模拟器——Dev Settings——Debug server host & port for device——填入本机ip:8081——确定
在重新抖动模拟器，你会看到cmd React Packager里面Transforming modules的进度条，等到它完成。

你就会看到成功啦：Welcome to React Native！是你，就是你，你你你。。。你你你你你现在你正式成为了RN的开发者了，一点都不差。就是这样！