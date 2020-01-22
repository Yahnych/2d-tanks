export class MapManager {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.map = {"width":1000,"height":800,"blockSize":50,"coords":[{"id":2,"x":0,"y":100,"blockColliders":[{"type":"yWall","x":3,"y":100,"w":47,"h":3},{"type":"yWall","x":3,"y":147,"w":47,"h":3},{"type":"xWall","x":0,"y":100,"w":3,"h":50},{"type":"xWall","x":47,"y":100,"w":3,"h":50}],"block":true},{"id":3,"x":0,"y":150,"blockColliders":[{"type":"yWall","x":3,"y":150,"w":47,"h":3},{"type":"yWall","x":3,"y":197,"w":47,"h":3},{"type":"xWall","x":0,"y":150,"w":3,"h":50},{"type":"xWall","x":47,"y":150,"w":3,"h":50}],"block":true},{"id":4,"x":0,"y":200,"blockColliders":[{"type":"yWall","x":3,"y":200,"w":47,"h":3},{"type":"yWall","x":3,"y":247,"w":47,"h":3},{"type":"xWall","x":0,"y":200,"w":3,"h":50},{"type":"xWall","x":47,"y":200,"w":3,"h":50}],"block":true},{"id":5,"x":0,"y":250,"blockColliders":[{"type":"yWall","x":3,"y":250,"w":47,"h":3},{"type":"yWall","x":3,"y":297,"w":47,"h":3},{"type":"xWall","x":0,"y":250,"w":3,"h":50},{"type":"xWall","x":47,"y":250,"w":3,"h":50}],"block":true},{"id":6,"x":0,"y":300,"blockColliders":[{"type":"yWall","x":3,"y":300,"w":47,"h":3},{"type":"yWall","x":3,"y":347,"w":47,"h":3},{"type":"xWall","x":0,"y":300,"w":3,"h":50},{"type":"xWall","x":47,"y":300,"w":3,"h":50}],"block":true},{"id":7,"x":0,"y":350,"blockColliders":[{"type":"yWall","x":3,"y":350,"w":47,"h":3},{"type":"yWall","x":3,"y":397,"w":47,"h":3},{"type":"xWall","x":0,"y":350,"w":3,"h":50},{"type":"xWall","x":47,"y":350,"w":3,"h":50}],"block":true},{"id":8,"x":0,"y":400,"blockColliders":[{"type":"yWall","x":3,"y":400,"w":47,"h":3},{"type":"yWall","x":3,"y":447,"w":47,"h":3},{"type":"xWall","x":0,"y":400,"w":3,"h":50},{"type":"xWall","x":47,"y":400,"w":3,"h":50}],"block":true},{"id":9,"x":0,"y":450,"blockColliders":[{"type":"yWall","x":3,"y":450,"w":47,"h":3},{"type":"yWall","x":3,"y":497,"w":47,"h":3},{"type":"xWall","x":0,"y":450,"w":3,"h":50},{"type":"xWall","x":47,"y":450,"w":3,"h":50}],"block":true},{"id":10,"x":0,"y":500,"blockColliders":[{"type":"yWall","x":3,"y":500,"w":47,"h":3},{"type":"yWall","x":3,"y":547,"w":47,"h":3},{"type":"xWall","x":0,"y":500,"w":3,"h":50},{"type":"xWall","x":47,"y":500,"w":3,"h":50}],"block":true},{"id":11,"x":0,"y":550,"blockColliders":[{"type":"yWall","x":3,"y":550,"w":47,"h":3},{"type":"yWall","x":3,"y":597,"w":47,"h":3},{"type":"xWall","x":0,"y":550,"w":3,"h":50},{"type":"xWall","x":47,"y":550,"w":3,"h":50}],"block":true},{"id":12,"x":0,"y":600,"blockColliders":[{"type":"yWall","x":3,"y":600,"w":47,"h":3},{"type":"yWall","x":3,"y":647,"w":47,"h":3},{"type":"xWall","x":0,"y":600,"w":3,"h":50},{"type":"xWall","x":47,"y":600,"w":3,"h":50}],"block":true},{"id":13,"x":0,"y":650,"blockColliders":[{"type":"yWall","x":3,"y":650,"w":47,"h":3},{"type":"yWall","x":3,"y":697,"w":47,"h":3},{"type":"xWall","x":0,"y":650,"w":3,"h":50},{"type":"xWall","x":47,"y":650,"w":3,"h":50}],"block":true},{"id":17,"x":50,"y":50,"blockColliders":[{"type":"yWall","x":53,"y":50,"w":47,"h":3},{"type":"yWall","x":53,"y":97,"w":47,"h":3},{"type":"xWall","x":50,"y":50,"w":3,"h":50},{"type":"xWall","x":97,"y":50,"w":3,"h":50}],"block":true},{"id":30,"x":50,"y":700,"blockColliders":[{"type":"yWall","x":53,"y":700,"w":47,"h":3},{"type":"yWall","x":53,"y":747,"w":47,"h":3},{"type":"xWall","x":50,"y":700,"w":3,"h":50},{"type":"xWall","x":97,"y":700,"w":3,"h":50}],"block":true},{"id":32,"x":100,"y":0,"blockColliders":[{"type":"yWall","x":103,"y":0,"w":47,"h":3},{"type":"yWall","x":103,"y":47,"w":47,"h":3},{"type":"xWall","x":100,"y":0,"w":3,"h":50},{"type":"xWall","x":147,"y":0,"w":3,"h":50}],"block":true},{"id":47,"x":100,"y":750,"blockColliders":[{"type":"yWall","x":103,"y":750,"w":47,"h":3},{"type":"yWall","x":103,"y":797,"w":47,"h":3},{"type":"xWall","x":100,"y":750,"w":3,"h":50},{"type":"xWall","x":147,"y":750,"w":3,"h":50}],"block":true},{"id":48,"x":150,"y":0,"blockColliders":[{"type":"yWall","x":153,"y":0,"w":47,"h":3},{"type":"yWall","x":153,"y":47,"w":47,"h":3},{"type":"xWall","x":150,"y":0,"w":3,"h":50},{"type":"xWall","x":197,"y":0,"w":3,"h":50}],"block":true},{"id":63,"x":150,"y":750,"blockColliders":[{"type":"yWall","x":153,"y":750,"w":47,"h":3},{"type":"yWall","x":153,"y":797,"w":47,"h":3},{"type":"xWall","x":150,"y":750,"w":3,"h":50},{"type":"xWall","x":197,"y":750,"w":3,"h":50}],"block":true},{"id":64,"x":200,"y":0,"blockColliders":[{"type":"yWall","x":203,"y":0,"w":47,"h":3},{"type":"yWall","x":203,"y":47,"w":47,"h":3},{"type":"xWall","x":200,"y":0,"w":3,"h":50},{"type":"xWall","x":247,"y":0,"w":3,"h":50}],"block":true},{"id":79,"x":200,"y":750,"blockColliders":[{"type":"yWall","x":203,"y":750,"w":47,"h":3},{"type":"yWall","x":203,"y":797,"w":47,"h":3},{"type":"xWall","x":200,"y":750,"w":3,"h":50},{"type":"xWall","x":247,"y":750,"w":3,"h":50}],"block":true},{"id":80,"x":250,"y":0,"blockColliders":[{"type":"yWall","x":253,"y":0,"w":47,"h":3},{"type":"yWall","x":253,"y":47,"w":47,"h":3},{"type":"xWall","x":250,"y":0,"w":3,"h":50},{"type":"xWall","x":297,"y":0,"w":3,"h":50}],"block":true},{"id":95,"x":250,"y":750,"blockColliders":[{"type":"yWall","x":253,"y":750,"w":47,"h":3},{"type":"yWall","x":253,"y":797,"w":47,"h":3},{"type":"xWall","x":250,"y":750,"w":3,"h":50},{"type":"xWall","x":297,"y":750,"w":3,"h":50}],"block":true},{"id":96,"x":300,"y":0,"blockColliders":[{"type":"yWall","x":303,"y":0,"w":47,"h":3},{"type":"yWall","x":303,"y":47,"w":47,"h":3},{"type":"xWall","x":300,"y":0,"w":3,"h":50},{"type":"xWall","x":347,"y":0,"w":3,"h":50}],"block":true},{"id":111,"x":300,"y":750,"blockColliders":[{"type":"yWall","x":303,"y":750,"w":47,"h":3},{"type":"yWall","x":303,"y":797,"w":47,"h":3},{"type":"xWall","x":300,"y":750,"w":3,"h":50},{"type":"xWall","x":347,"y":750,"w":3,"h":50}],"block":true},{"id":112,"x":350,"y":0,"blockColliders":[{"type":"yWall","x":353,"y":0,"w":47,"h":3},{"type":"yWall","x":353,"y":47,"w":47,"h":3},{"type":"xWall","x":350,"y":0,"w":3,"h":50},{"type":"xWall","x":397,"y":0,"w":3,"h":50}],"block":true},{"id":127,"x":350,"y":750,"blockColliders":[{"type":"yWall","x":353,"y":750,"w":47,"h":3},{"type":"yWall","x":353,"y":797,"w":47,"h":3},{"type":"xWall","x":350,"y":750,"w":3,"h":50},{"type":"xWall","x":397,"y":750,"w":3,"h":50}],"block":true},{"id":128,"x":400,"y":0,"blockColliders":[{"type":"yWall","x":403,"y":0,"w":47,"h":3},{"type":"yWall","x":403,"y":47,"w":47,"h":3},{"type":"xWall","x":400,"y":0,"w":3,"h":50},{"type":"xWall","x":447,"y":0,"w":3,"h":50}],"block":true},{"id":133,"x":400,"y":250,"blockColliders":[{"type":"yWall","x":403,"y":250,"w":47,"h":3},{"type":"yWall","x":403,"y":297,"w":47,"h":3},{"type":"xWall","x":400,"y":250,"w":3,"h":50},{"type":"xWall","x":447,"y":250,"w":3,"h":50}],"block":true},{"id":134,"x":400,"y":300,"blockColliders":[{"type":"yWall","x":403,"y":300,"w":47,"h":3},{"type":"yWall","x":403,"y":347,"w":47,"h":3},{"type":"xWall","x":400,"y":300,"w":3,"h":50},{"type":"xWall","x":447,"y":300,"w":3,"h":50}],"block":true},{"id":135,"x":400,"y":350,"blockColliders":[{"type":"yWall","x":403,"y":350,"w":47,"h":3},{"type":"yWall","x":403,"y":397,"w":47,"h":3},{"type":"xWall","x":400,"y":350,"w":3,"h":50},{"type":"xWall","x":447,"y":350,"w":3,"h":50}],"block":true},{"id":136,"x":400,"y":400,"blockColliders":[{"type":"yWall","x":403,"y":400,"w":47,"h":3},{"type":"yWall","x":403,"y":447,"w":47,"h":3},{"type":"xWall","x":400,"y":400,"w":3,"h":50},{"type":"xWall","x":447,"y":400,"w":3,"h":50}],"block":true},{"id":137,"x":400,"y":450,"blockColliders":[{"type":"yWall","x":403,"y":450,"w":47,"h":3},{"type":"yWall","x":403,"y":497,"w":47,"h":3},{"type":"xWall","x":400,"y":450,"w":3,"h":50},{"type":"xWall","x":447,"y":450,"w":3,"h":50}],"block":true},{"id":138,"x":400,"y":500,"blockColliders":[{"type":"yWall","x":403,"y":500,"w":47,"h":3},{"type":"yWall","x":403,"y":547,"w":47,"h":3},{"type":"xWall","x":400,"y":500,"w":3,"h":50},{"type":"xWall","x":447,"y":500,"w":3,"h":50}],"block":true},{"id":143,"x":400,"y":750,"blockColliders":[{"type":"yWall","x":403,"y":750,"w":47,"h":3},{"type":"yWall","x":403,"y":797,"w":47,"h":3},{"type":"xWall","x":400,"y":750,"w":3,"h":50},{"type":"xWall","x":447,"y":750,"w":3,"h":50}],"block":true},{"id":144,"x":450,"y":0,"blockColliders":[{"type":"yWall","x":453,"y":0,"w":47,"h":3},{"type":"yWall","x":453,"y":47,"w":47,"h":3},{"type":"xWall","x":450,"y":0,"w":3,"h":50},{"type":"xWall","x":497,"y":0,"w":3,"h":50}],"block":true},{"id":145,"x":450,"y":50,"blockColliders":[{"type":"yWall","x":453,"y":50,"w":47,"h":3},{"type":"yWall","x":453,"y":97,"w":47,"h":3},{"type":"xWall","x":450,"y":50,"w":3,"h":50},{"type":"xWall","x":497,"y":50,"w":3,"h":50}],"block":true},{"id":149,"x":450,"y":250,"blockColliders":[{"type":"yWall","x":453,"y":250,"w":47,"h":3},{"type":"yWall","x":453,"y":297,"w":47,"h":3},{"type":"xWall","x":450,"y":250,"w":3,"h":50},{"type":"xWall","x":497,"y":250,"w":3,"h":50}],"block":true},{"id":150,"x":450,"y":300,"blockColliders":[{"type":"yWall","x":453,"y":300,"w":47,"h":3},{"type":"yWall","x":453,"y":347,"w":47,"h":3},{"type":"xWall","x":450,"y":300,"w":3,"h":50},{"type":"xWall","x":497,"y":300,"w":3,"h":50}],"block":true},{"id":151,"x":450,"y":350,"blockColliders":[{"type":"yWall","x":453,"y":350,"w":47,"h":3},{"type":"yWall","x":453,"y":397,"w":47,"h":3},{"type":"xWall","x":450,"y":350,"w":3,"h":50},{"type":"xWall","x":497,"y":350,"w":3,"h":50}],"block":true},{"id":152,"x":450,"y":400,"blockColliders":[{"type":"yWall","x":453,"y":400,"w":47,"h":3},{"type":"yWall","x":453,"y":447,"w":47,"h":3},{"type":"xWall","x":450,"y":400,"w":3,"h":50},{"type":"xWall","x":497,"y":400,"w":3,"h":50}],"block":true},{"id":153,"x":450,"y":450,"blockColliders":[{"type":"yWall","x":453,"y":450,"w":47,"h":3},{"type":"yWall","x":453,"y":497,"w":47,"h":3},{"type":"xWall","x":450,"y":450,"w":3,"h":50},{"type":"xWall","x":497,"y":450,"w":3,"h":50}],"block":true},{"id":154,"x":450,"y":500,"blockColliders":[{"type":"yWall","x":453,"y":500,"w":47,"h":3},{"type":"yWall","x":453,"y":547,"w":47,"h":3},{"type":"xWall","x":450,"y":500,"w":3,"h":50},{"type":"xWall","x":497,"y":500,"w":3,"h":50}],"block":true},{"id":158,"x":450,"y":700,"blockColliders":[{"type":"yWall","x":453,"y":700,"w":47,"h":3},{"type":"yWall","x":453,"y":747,"w":47,"h":3},{"type":"xWall","x":450,"y":700,"w":3,"h":50},{"type":"xWall","x":497,"y":700,"w":3,"h":50}],"block":true},{"id":159,"x":450,"y":750,"blockColliders":[{"type":"yWall","x":453,"y":750,"w":47,"h":3},{"type":"yWall","x":453,"y":797,"w":47,"h":3},{"type":"xWall","x":450,"y":750,"w":3,"h":50},{"type":"xWall","x":497,"y":750,"w":3,"h":50}],"block":true},{"id":160,"x":500,"y":0,"blockColliders":[{"type":"yWall","x":503,"y":0,"w":47,"h":3},{"type":"yWall","x":503,"y":47,"w":47,"h":3},{"type":"xWall","x":500,"y":0,"w":3,"h":50},{"type":"xWall","x":547,"y":0,"w":3,"h":50}],"block":true},{"id":161,"x":500,"y":50,"blockColliders":[{"type":"yWall","x":503,"y":50,"w":47,"h":3},{"type":"yWall","x":503,"y":97,"w":47,"h":3},{"type":"xWall","x":500,"y":50,"w":3,"h":50},{"type":"xWall","x":547,"y":50,"w":3,"h":50}],"block":true},{"id":165,"x":500,"y":250,"blockColliders":[{"type":"yWall","x":503,"y":250,"w":47,"h":3},{"type":"yWall","x":503,"y":297,"w":47,"h":3},{"type":"xWall","x":500,"y":250,"w":3,"h":50},{"type":"xWall","x":547,"y":250,"w":3,"h":50}],"block":true},{"id":166,"x":500,"y":300,"blockColliders":[{"type":"yWall","x":503,"y":300,"w":47,"h":3},{"type":"yWall","x":503,"y":347,"w":47,"h":3},{"type":"xWall","x":500,"y":300,"w":3,"h":50},{"type":"xWall","x":547,"y":300,"w":3,"h":50}],"block":true},{"id":167,"x":500,"y":350,"blockColliders":[{"type":"yWall","x":503,"y":350,"w":47,"h":3},{"type":"yWall","x":503,"y":397,"w":47,"h":3},{"type":"xWall","x":500,"y":350,"w":3,"h":50},{"type":"xWall","x":547,"y":350,"w":3,"h":50}],"block":true},{"id":168,"x":500,"y":400,"blockColliders":[{"type":"yWall","x":503,"y":400,"w":47,"h":3},{"type":"yWall","x":503,"y":447,"w":47,"h":3},{"type":"xWall","x":500,"y":400,"w":3,"h":50},{"type":"xWall","x":547,"y":400,"w":3,"h":50}],"block":true},{"id":169,"x":500,"y":450,"blockColliders":[{"type":"yWall","x":503,"y":450,"w":47,"h":3},{"type":"yWall","x":503,"y":497,"w":47,"h":3},{"type":"xWall","x":500,"y":450,"w":3,"h":50},{"type":"xWall","x":547,"y":450,"w":3,"h":50}],"block":true},{"id":170,"x":500,"y":500,"blockColliders":[{"type":"yWall","x":503,"y":500,"w":47,"h":3},{"type":"yWall","x":503,"y":547,"w":47,"h":3},{"type":"xWall","x":500,"y":500,"w":3,"h":50},{"type":"xWall","x":547,"y":500,"w":3,"h":50}],"block":true},{"id":174,"x":500,"y":700,"blockColliders":[{"type":"yWall","x":503,"y":700,"w":47,"h":3},{"type":"yWall","x":503,"y":747,"w":47,"h":3},{"type":"xWall","x":500,"y":700,"w":3,"h":50},{"type":"xWall","x":547,"y":700,"w":3,"h":50}],"block":true},{"id":175,"x":500,"y":750,"blockColliders":[{"type":"yWall","x":503,"y":750,"w":47,"h":3},{"type":"yWall","x":503,"y":797,"w":47,"h":3},{"type":"xWall","x":500,"y":750,"w":3,"h":50},{"type":"xWall","x":547,"y":750,"w":3,"h":50}],"block":true},{"id":176,"x":550,"y":0,"blockColliders":[{"type":"yWall","x":553,"y":0,"w":47,"h":3},{"type":"yWall","x":553,"y":47,"w":47,"h":3},{"type":"xWall","x":550,"y":0,"w":3,"h":50},{"type":"xWall","x":597,"y":0,"w":3,"h":50}],"block":true},{"id":181,"x":550,"y":250,"blockColliders":[{"type":"yWall","x":553,"y":250,"w":47,"h":3},{"type":"yWall","x":553,"y":297,"w":47,"h":3},{"type":"xWall","x":550,"y":250,"w":3,"h":50},{"type":"xWall","x":597,"y":250,"w":3,"h":50}],"block":true},{"id":182,"x":550,"y":300,"blockColliders":[{"type":"yWall","x":553,"y":300,"w":47,"h":3},{"type":"yWall","x":553,"y":347,"w":47,"h":3},{"type":"xWall","x":550,"y":300,"w":3,"h":50},{"type":"xWall","x":597,"y":300,"w":3,"h":50}],"block":true},{"id":183,"x":550,"y":350,"blockColliders":[{"type":"yWall","x":553,"y":350,"w":47,"h":3},{"type":"yWall","x":553,"y":397,"w":47,"h":3},{"type":"xWall","x":550,"y":350,"w":3,"h":50},{"type":"xWall","x":597,"y":350,"w":3,"h":50}],"block":true},{"id":184,"x":550,"y":400,"blockColliders":[{"type":"yWall","x":553,"y":400,"w":47,"h":3},{"type":"yWall","x":553,"y":447,"w":47,"h":3},{"type":"xWall","x":550,"y":400,"w":3,"h":50},{"type":"xWall","x":597,"y":400,"w":3,"h":50}],"block":true},{"id":185,"x":550,"y":450,"blockColliders":[{"type":"yWall","x":553,"y":450,"w":47,"h":3},{"type":"yWall","x":553,"y":497,"w":47,"h":3},{"type":"xWall","x":550,"y":450,"w":3,"h":50},{"type":"xWall","x":597,"y":450,"w":3,"h":50}],"block":true},{"id":186,"x":550,"y":500,"blockColliders":[{"type":"yWall","x":553,"y":500,"w":47,"h":3},{"type":"yWall","x":553,"y":547,"w":47,"h":3},{"type":"xWall","x":550,"y":500,"w":3,"h":50},{"type":"xWall","x":597,"y":500,"w":3,"h":50}],"block":true},{"id":191,"x":550,"y":750,"blockColliders":[{"type":"yWall","x":553,"y":750,"w":47,"h":3},{"type":"yWall","x":553,"y":797,"w":47,"h":3},{"type":"xWall","x":550,"y":750,"w":3,"h":50},{"type":"xWall","x":597,"y":750,"w":3,"h":50}],"block":true},{"id":192,"x":600,"y":0,"blockColliders":[{"type":"yWall","x":603,"y":0,"w":47,"h":3},{"type":"yWall","x":603,"y":47,"w":47,"h":3},{"type":"xWall","x":600,"y":0,"w":3,"h":50},{"type":"xWall","x":647,"y":0,"w":3,"h":50}],"block":true},{"id":207,"x":600,"y":750,"blockColliders":[{"type":"yWall","x":603,"y":750,"w":47,"h":3},{"type":"yWall","x":603,"y":797,"w":47,"h":3},{"type":"xWall","x":600,"y":750,"w":3,"h":50},{"type":"xWall","x":647,"y":750,"w":3,"h":50}],"block":true},{"id":208,"x":650,"y":0,"blockColliders":[{"type":"yWall","x":653,"y":0,"w":47,"h":3},{"type":"yWall","x":653,"y":47,"w":47,"h":3},{"type":"xWall","x":650,"y":0,"w":3,"h":50},{"type":"xWall","x":697,"y":0,"w":3,"h":50}],"block":true},{"id":223,"x":650,"y":750,"blockColliders":[{"type":"yWall","x":653,"y":750,"w":47,"h":3},{"type":"yWall","x":653,"y":797,"w":47,"h":3},{"type":"xWall","x":650,"y":750,"w":3,"h":50},{"type":"xWall","x":697,"y":750,"w":3,"h":50}],"block":true},{"id":224,"x":700,"y":0,"blockColliders":[{"type":"yWall","x":703,"y":0,"w":47,"h":3},{"type":"yWall","x":703,"y":47,"w":47,"h":3},{"type":"xWall","x":700,"y":0,"w":3,"h":50},{"type":"xWall","x":747,"y":0,"w":3,"h":50}],"block":true},{"id":239,"x":700,"y":750,"blockColliders":[{"type":"yWall","x":703,"y":750,"w":47,"h":3},{"type":"yWall","x":703,"y":797,"w":47,"h":3},{"type":"xWall","x":700,"y":750,"w":3,"h":50},{"type":"xWall","x":747,"y":750,"w":3,"h":50}],"block":true},{"id":240,"x":750,"y":0,"blockColliders":[{"type":"yWall","x":753,"y":0,"w":47,"h":3},{"type":"yWall","x":753,"y":47,"w":47,"h":3},{"type":"xWall","x":750,"y":0,"w":3,"h":50},{"type":"xWall","x":797,"y":0,"w":3,"h":50}],"block":true},{"id":255,"x":750,"y":750,"blockColliders":[{"type":"yWall","x":753,"y":750,"w":47,"h":3},{"type":"yWall","x":753,"y":797,"w":47,"h":3},{"type":"xWall","x":750,"y":750,"w":3,"h":50},{"type":"xWall","x":797,"y":750,"w":3,"h":50}],"block":true},{"id":256,"x":800,"y":0,"blockColliders":[{"type":"yWall","x":803,"y":0,"w":47,"h":3},{"type":"yWall","x":803,"y":47,"w":47,"h":3},{"type":"xWall","x":800,"y":0,"w":3,"h":50},{"type":"xWall","x":847,"y":0,"w":3,"h":50}],"block":true},{"id":271,"x":800,"y":750,"blockColliders":[{"type":"yWall","x":803,"y":750,"w":47,"h":3},{"type":"yWall","x":803,"y":797,"w":47,"h":3},{"type":"xWall","x":800,"y":750,"w":3,"h":50},{"type":"xWall","x":847,"y":750,"w":3,"h":50}],"block":true},{"id":272,"x":850,"y":0,"blockColliders":[{"type":"yWall","x":853,"y":0,"w":47,"h":3},{"type":"yWall","x":853,"y":47,"w":47,"h":3},{"type":"xWall","x":850,"y":0,"w":3,"h":50},{"type":"xWall","x":897,"y":0,"w":3,"h":50}],"block":true},{"id":287,"x":850,"y":750,"blockColliders":[{"type":"yWall","x":853,"y":750,"w":47,"h":3},{"type":"yWall","x":853,"y":797,"w":47,"h":3},{"type":"xWall","x":850,"y":750,"w":3,"h":50},{"type":"xWall","x":897,"y":750,"w":3,"h":50}],"block":true},{"id":289,"x":900,"y":50,"blockColliders":[{"type":"yWall","x":903,"y":50,"w":47,"h":3},{"type":"yWall","x":903,"y":97,"w":47,"h":3},{"type":"xWall","x":900,"y":50,"w":3,"h":50},{"type":"xWall","x":947,"y":50,"w":3,"h":50}],"block":true},{"id":302,"x":900,"y":700,"blockColliders":[{"type":"yWall","x":903,"y":700,"w":47,"h":3},{"type":"yWall","x":903,"y":747,"w":47,"h":3},{"type":"xWall","x":900,"y":700,"w":3,"h":50},{"type":"xWall","x":947,"y":700,"w":3,"h":50}],"block":true},{"id":306,"x":950,"y":100,"blockColliders":[{"type":"yWall","x":953,"y":100,"w":47,"h":3},{"type":"yWall","x":953,"y":147,"w":47,"h":3},{"type":"xWall","x":950,"y":100,"w":3,"h":50},{"type":"xWall","x":997,"y":100,"w":3,"h":50}],"block":true},{"id":307,"x":950,"y":150,"blockColliders":[{"type":"yWall","x":953,"y":150,"w":47,"h":3},{"type":"yWall","x":953,"y":197,"w":47,"h":3},{"type":"xWall","x":950,"y":150,"w":3,"h":50},{"type":"xWall","x":997,"y":150,"w":3,"h":50}],"block":true},{"id":308,"x":950,"y":200,"blockColliders":[{"type":"yWall","x":953,"y":200,"w":47,"h":3},{"type":"yWall","x":953,"y":247,"w":47,"h":3},{"type":"xWall","x":950,"y":200,"w":3,"h":50},{"type":"xWall","x":997,"y":200,"w":3,"h":50}],"block":true},{"id":309,"x":950,"y":250,"blockColliders":[{"type":"yWall","x":953,"y":250,"w":47,"h":3},{"type":"yWall","x":953,"y":297,"w":47,"h":3},{"type":"xWall","x":950,"y":250,"w":3,"h":50},{"type":"xWall","x":997,"y":250,"w":3,"h":50}],"block":true},{"id":310,"x":950,"y":300,"blockColliders":[{"type":"yWall","x":953,"y":300,"w":47,"h":3},{"type":"yWall","x":953,"y":347,"w":47,"h":3},{"type":"xWall","x":950,"y":300,"w":3,"h":50},{"type":"xWall","x":997,"y":300,"w":3,"h":50}],"block":true},{"id":311,"x":950,"y":350,"blockColliders":[{"type":"yWall","x":953,"y":350,"w":47,"h":3},{"type":"yWall","x":953,"y":397,"w":47,"h":3},{"type":"xWall","x":950,"y":350,"w":3,"h":50},{"type":"xWall","x":997,"y":350,"w":3,"h":50}],"block":true},{"id":312,"x":950,"y":400,"blockColliders":[{"type":"yWall","x":953,"y":400,"w":47,"h":3},{"type":"yWall","x":953,"y":447,"w":47,"h":3},{"type":"xWall","x":950,"y":400,"w":3,"h":50},{"type":"xWall","x":997,"y":400,"w":3,"h":50}],"block":true},{"id":313,"x":950,"y":450,"blockColliders":[{"type":"yWall","x":953,"y":450,"w":47,"h":3},{"type":"yWall","x":953,"y":497,"w":47,"h":3},{"type":"xWall","x":950,"y":450,"w":3,"h":50},{"type":"xWall","x":997,"y":450,"w":3,"h":50}],"block":true},{"id":314,"x":950,"y":500,"blockColliders":[{"type":"yWall","x":953,"y":500,"w":47,"h":3},{"type":"yWall","x":953,"y":547,"w":47,"h":3},{"type":"xWall","x":950,"y":500,"w":3,"h":50},{"type":"xWall","x":997,"y":500,"w":3,"h":50}],"block":true},{"id":315,"x":950,"y":550,"blockColliders":[{"type":"yWall","x":953,"y":550,"w":47,"h":3},{"type":"yWall","x":953,"y":597,"w":47,"h":3},{"type":"xWall","x":950,"y":550,"w":3,"h":50},{"type":"xWall","x":997,"y":550,"w":3,"h":50}],"block":true},{"id":316,"x":950,"y":600,"blockColliders":[{"type":"yWall","x":953,"y":600,"w":47,"h":3},{"type":"yWall","x":953,"y":647,"w":47,"h":3},{"type":"xWall","x":950,"y":600,"w":3,"h":50},{"type":"xWall","x":997,"y":600,"w":3,"h":50}],"block":true},{"id":317,"x":950,"y":650,"blockColliders":[{"type":"yWall","x":953,"y":650,"w":47,"h":3},{"type":"yWall","x":953,"y":697,"w":47,"h":3},{"type":"xWall","x":950,"y":650,"w":3,"h":50},{"type":"xWall","x":997,"y":650,"w":3,"h":50}],"block":true}]};
        this.blockColor = "black";
    }

    renderMap(map) {
        let width = map.width;
        let height = map.height;
        let blockSize = map.blockSize;
        let blockCoords = map.coords;

        this.canvas.width = width;
        this.canvas.height = height;

        blockCoords.forEach(v => {
            this.ctx.beginPath();
            this.ctx.rect(v.x, v.y, blockSize, blockSize);
            this.ctx.fillStyle = this.blockColor;    
            this.ctx.closePath();
            this.ctx.fill();

            this.debugColliders(v.blockColliders);
        });      
    }

    debugColliders(colliders) {

        colliders.forEach((v)=>{
            let fillStyle
            if (v.type === "yWall") {
                fillStyle = "red";
            } else {
                fillStyle = "green";
            }
            this.ctx.beginPath();
            this.ctx.rect(v.x, v.y, v.w, v.h);
            this.ctx.fillStyle = fillStyle;    
            this.ctx.closePath();
            this.ctx.fill();
        })
        
    }

    getMap() {
        return this.map;
    }
}