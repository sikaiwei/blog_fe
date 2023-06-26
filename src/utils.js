import React from 'react';

const inject = obj => Comp => props => <Comp {...obj} {...props} />;

/**
 * 解析qs
 * 输入查询字符串
 * 输出对象
 */
function parse_qs(search) {
    var re = /(\w+)=([^&]+)/;
    if (search[0] == '?')
        search = search.substr(1);

    var ret ={};
    search.split('&').forEach(element => {
        var match = re.exec(element);
        if (match)
            ret[match[1]] = match[2];      
    });

    return ret;

}


export {inject, parse_qs};