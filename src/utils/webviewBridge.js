if(window.ReactNativeWebView){
    (function(){
        var promiseChain = Promise.resolve();
        var init = function (){

            /**
             * javascript => react-native
             * javascript에서 react-native에 메세지를 보낸다.
             */
            window.webViewBridge = {

                goBack: function(){
                    window.ReactNativeWebView.postMessage(JSON.stringify({
                        targetFunc: 'goBack',
                        data: {}
                    }));
                },

                send: function(targetFunc, data){
                    var msgObj = {
                        targetFunc: targetFunc,
                        data: data || {}
                    };

                    var msg = JSON.stringify(msgObj);

                    promiseChain = promiseChain.then(function () {
                        return new Promise(function (resolve, reject) {
                            console.log("react native에 메세지를 보냄 " + msgObj.targetFunc);
                            window.ReactNativeWebView.postMessage(msg);
                            resolve();
                        })
                    }).catch(function (e) {
                        console.error('메세지 실패 ' + e.message);
                    });
                }
            };

            /**
             * react-native => javascript
             * react native에서 화면에 결과를 넘겨준다.
             */
            window.addEventListener('message', function(e){
                console.log("react native에서 메세지를 받음", JSON.parse(e.data));
            });
        }
        init();
    }());


  // 웹뷰 => 네이티브 (데이터 이동)


    // var estimatedLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    // estimatedLoadTime = estimatedLoadTime * -1;
    // estimatedLoadTime = parseInt((estimatedLoadTime/1000)%60)*100;

    // var estimatedLoadTimeObject = {
    //     estimatedLoadTime: estimatedLoadTime
    // }

    // window.ReactNativeWebView.postMessage(JSON.stringify(estimatedLoadTimeObject));


    // $('#header').on('click', function(){
    //     var testMsg = {
    //         targetFunc: 'sbgFunc',
    //         data: {
    //             sbg: '천재다'
    //         }
    //     }
    //     console.log('ReactNativeWebView 실행됨');
        
    //     window.ReactNativeWebView.postMessage(JSON.stringify(testMsg));
    // });
    
    // // 네이티브 => 웹뷰 (데이터 이동)
    // window.addEventListener('message', function(e){
    //     // $('#header').html(JSON.parse(e.data));
    //     var msgValue = JSON.parse(e.data);
    //     if(msgValue.command){
    //         console.log('ticker 메시지', msgValue);
    //     }
    //     if(msgValue.targetFunc){
    //         console.log("react native에서 메세지를 받음", msgValue);
    //         $('#header').html(e);
    //     }
    // });
}
