type Words = {
    [whatever: string]: string
}
class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }
    def(term:string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term:string,
        public def:string
    ) {}
}

const kimchi = new Word("kimchi", "한국 대표 음식")
const dict = new Dict()
dict.add(kimchi);
dict.def("kimchi");

// 2023.01.15 노마드코더 TypeScript로 블록체인 만들기 #4 [2022 UPDATE] CLASSES AND INTERFACES 4.1 Recap까지 수강 후
// 강의가 이해가 안되서 JavaScript 공부를 하고 다시 TypeScript를 공부하기로