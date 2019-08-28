export class WordCounter {
    getCount(text: string) : {[key: string]: number;} {
        const cleanedText = this.cleanText(text).toLowerCase()
        const words = cleanedText.split(" ");
        const countMap: {[key: string]: number} = {};
        words.forEach(word => {
            if(word == "") return
            const prevValue = countMap[word] || 0;
            countMap[word] = prevValue + 1;
        });
        return countMap
    }

    cleanText(text: string) {
        return text.replace("." , "")
    }
}