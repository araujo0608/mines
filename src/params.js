import { Dimensions } from "react-native";

const params = {
    blockSize: 30, 
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Header Proportion in top screen (15%)
    difficultLevel: 0.1, // 0.1 - easy, 0.2 - medium, 0.3 - hard
    getColumnsAmount(){
        const width = Dimensions.get("window").width;
        return Math.floor(width / this.blockSize);
    },

    getRowsAmount(){
        const totalHeight = Dimensions.get("window").height;
        const boardHeight = totalHeight * (1 - this.headerRatio); // (85%) of screen
        return Math.floor(boardHeight / this.blockSize);
    }
}

export default params;