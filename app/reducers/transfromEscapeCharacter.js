
const escapeHtml = [
    {
        html: "&amp;",
        string: "&",
    },
    {
        html: "&lt;p&gt;",
        string: "",
    },
    {
        html: "&lt;/p&gt;",
        string: "",
    },
    {
        html: "&quot;",
        string: '"',
    },
    {
        html: "&quot;",
        string: '"',
    }
]

const transfromEscapeCharacter = {
    esc2string: (text) => {
        let count = 0;
        escapeHtml.map((item)=> {
            count = 0;
            while (text.indexOf(item.html) && count < 10) {
                text = text.replace(item.html, item.string);
                count += 1;
            }
        })
    
        return text;
    }
}


export default transfromEscapeCharacter;