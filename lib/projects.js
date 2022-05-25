
let Project = class {
    constructor(name, image, about, tags1, tags2, tags3, tags4) {
        this.name = name;
        this.image = image;
        this.about = about;  
        this.tags1 = tags1;
        this.tags2 = tags2;
        this.tags3 = tags3;
        this.tags4 = tags4;
       

      }
}


//TODO: Add proper details

export const projects = [
    new Project(
        "Books Of Ye",
        "./booksofye.png",
        "An NFT project of 1000 cards representing Kanye West with a biblical theme. Artwork designed by collective of over a dozen award-winning 2D and 3D artists from Dior, NASA, Adidas, Prada, Saint Laurent, Playstation, and Marvel. On first day launch this project made $100,000 USD+ in mints.",
        "Smart Contract",
        "Minting Site",
        "NFT Strategy",
        "#OpenSpaces"
    ),
    new Project(
        "Bungalo Boy",
        "./bungaloboy.png",
        "An NFT project for LA based artist Ranel. 10,000 unique 1/1 Bungalo Boys to be minted on the Solana blockchain. OPENSPACES handeled the development work for this project.",
        "Minting Site", 
        "React/Next.js",
        "Animation",
        "#OpenSpaces"
        ),
    new Project(
        "Good Of The Hive",
        "./bee-site.png",
        "1000 unique Waggles by artist Matt Willey are a rare collection of bees offered as a part of his global art project The Good of the Hive.",
        "Smart Contract", 
        "Minting Site", 
        "UX/UI Design",
        "Art Generator"
        ),
    new Project(
        "Cerberus Studios",
        "./cerberus.png",
        "A Los Angeles based clothing company looking to reward its customer base with free NFTS with each purchase.",
        "Smart Contract",
        "Minting Site",
        "UX/UI Design",
        "Art Generator"
    )
    
]