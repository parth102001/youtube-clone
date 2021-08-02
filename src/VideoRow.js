import React from "react";
import "./VideoRow.css";
import VideoCard from "./VideoCard";

function VideoRow({ full }) {
  return (
    <div className={`${full ? "videoRow" : "videoRow-full"}`}>
      <hr className="hr" />
      <div className="videoComponent">
        <VideoCard
          title="Graph Terminologies | C++ Placement Course"
          channelName="Apna College"
          views="291K"
          time="3 months ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/ymMZEudHUsk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBezhB9zYijPQS5AmM3oBx_gr3c4Q"
        ></VideoCard>
        <VideoCard
          title="Build a Covid-19 Tracker using Reactjs"
          channelName="Clever Programmer"
          views="1M"
          time="8 months ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/cF3pIMJUZxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtv9r9S-n6KJNL1ox9i_ujafPGRA"
        ></VideoCard>
        <VideoCard
          title="Iron Man | Believer"
          channelName="HyperX"
          views="6.2M"
          time="2 years ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwnjlzsVklapXxnG_n0pJZTxXZJCF9DLn0vUZ2fkU4Q=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/UEeLilRZh1E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe9GSi_qg_zz4PEQEc3N06bismMQ"
        ></VideoCard>
        <VideoCard
          title="Final year Placement Roadmap || Best ever placement roadmap in india"
          channelName="Love Babber"
          views="220k"
          time="6 months ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwniuiil3MsNvPltVwGbgyVArM0iMBtfTe00CcHNN=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/VY6003vijLw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABFVp7Lc0N_JoOoBE2UP8YpXv9FA"
        ></VideoCard>
        <VideoCard
          title="Namo Namo - song ||Sushant Rajput | Sara Ali Khan"
          channelName="Zee Music Company"
          views="50M"
          time="3 years ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwniayS5WllYgeNjIAPtQ2mvATH8Su5oSs18Qy-VQsg=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/dx4Teh-nv3A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8CZe8hgoWtnYnRob_VdpwceDX_g"
        ></VideoCard>
        <VideoCard
          title="TVF's Aspirants | Web series | Episode 5 | Pre..Mains or Life | Season Finale"
          channelName="The Viral Fever"
          views="8.5M"
          time="1 day ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwniFhQIvM-UQuPuPWfclzhwWER6sEY6Ut26PpYTZ=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/5H8xQF0PwvA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1KYiwd1rHKcog0Z9hGJtmpFV-iw"
        ></VideoCard>
        <VideoCard
          title="Switzerland in 8K HD | HDR"
          channelName="8K World"
          views="8.4M"
          time="5 months ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwnjCqbmjB5Oz0AHksZegaZzjlN3ZbEYLtAVYe5y4=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/linlz7-Pnvw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAuKQrT0GfkMk-xpSmIWd3fvg0MZg"
        ></VideoCard>
        <VideoCard
          title="BATTLEGROUNDS MOBILE INDIA | Logo Reveal"
          channelName="Battleground Mobile India"
          views="9M"
          time="5 days ago"
          channelImg="https://yt3.ggpht.com/6530Mmjfpov9sidTwMWSb5P7yo7Ldb8WIZLUU95LMyp9P74w1jvBWPSylpm8wyec1qoA8QtsfQ=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/RMWVftPRGro/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDOI4NzMWdA_QbeG9RAjpG-41e8Uw"
        ></VideoCard>
        <VideoCard
          title="My 30th Birthday & Most Expensive Gift"
          channelName="Gaurav Chaudhary"
          views="10.6M"
          time="2 days ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwnjMkBpGx-VkLepHgn_PL1SS-6xyl2WCkweZPtgrqg=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/8d8w3o4HGxI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD8LKtse2nnbHzi6ai6JVpsSCLIaw"
        ></VideoCard>
        <VideoCard
          title="Introducing iGlass | Apple"
          channelName="Apple"
          views="5M"
          time="3 weeks ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwnjMQg0vNJYMPsEA4X60Oqgj6A_ko4cLP0duHRG0cA=s176-c-k-c0x00ffffff-no-rj-mo"
          thumbnailImg="https://i.ytimg.com/vi/Xp0H84sWRqU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAAf5lBS4fqp9qavVwU67UVXacBwA"
        ></VideoCard>
        <VideoCard
          title="Why The iPad Dosen't Have The Calculator"
          channelName="Apple Explained"
          views="10M"
          time="3 months ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwnhKlXIUI8Yw8kCCkvzsPMiw9kKUBY36QgcEV2DIoA=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/WK_AtW66XI0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBtne5f_ugF56rdmYc1p7k7HFCU2Q"
        ></VideoCard>
        <VideoCard
          title="Let's build a Full Stack Amazon clone using MERN"
          channelName="Clever Programmer"
          views="410K"
          time="3 weeks ago"
          channelImg="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          thumbnailImg="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAQhP-fa4hpoVZvk3TgJ4G3cWDWTg"
        ></VideoCard>
      </div>
    </div>
  );
}

export default VideoRow;
