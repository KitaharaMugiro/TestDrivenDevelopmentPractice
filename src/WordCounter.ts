
import WordAppearance from "./WordAppearance";

class WordCounter {
    count(text: string) : {[key:string] : number}  {
        //to lowercase
        text = text.toLowerCase()
        //split text into words
        const words = text.split(" ")
        return this.simpleCounter(words)
    }

    simpleCounter(words : string[]) : {[key:string] : number}  {
        //prepare result object
        const countMap :  {[key:string] : number}  = {}

        //iterate words and count
        words.forEach(word => {
            if(word == "") return
            if(word == " ") return 
            if(countMap[word]) {
                countMap[word] += 1
            } else {
                countMap[word] = 1
            }
        })

        return countMap
    }

    sortedList(countMap : {[key:string] : number} ) : Array<WordAppearance> {
        const words = Object.keys(countMap)
        
        //展開してリストにする
        const wordList = words.map(word => {
            return new WordAppearance(word , countMap[word])
        })

        //count, wordの順にソートする
        const sortedList = wordList.sort((a , b) => {
            if(a.count > b.count) return -1;
            if(a.count < b.count) return 1;
            if(a.word < b.word) return -1;
            if(a.word > b.word) return 1;
            return 0;
        })

        return sortedList
    }
    
}

export default WordCounter