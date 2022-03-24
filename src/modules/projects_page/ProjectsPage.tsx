import React from "react";
import ProjectSection from "./ProjectSection";

export default function ProjectPages() {
	const projects = [
		{
			title: "背日文神器",
			content: (
				<>
					<p>
						「背日文神器」是學習日文單字的最佳工具，使用單字卡的概念，配合多種類型的題目，幫助迅速記住單字，輕鬆通過日文檢定！並且，App
						中提供了數千的免費可下載單字，涵蓋 N1~N5 不同等級，與各種日常主題。
					</p>
					<br />
					<p>
						「背日文神器」使用 Flutter/Dart 進行開發，並以 Firebase 為後端，在
						iOS/Android
						雙平台上都有上架。目前已有數千下載次數，每月活躍使用者也超過一千人。
					</p>
				</>
			),
			image: "/projects/jp-memorizer.png",
			appstore:
				"https://apps.apple.com/us/app/%E8%83%8C%E6%97%A5%E6%96%87%E7%A5%9E%E5%99%A8-%E6%97%A5%E6%AA%A2%E5%BF%85%E5%82%99%E5%96%AE%E5%AD%97%E6%95%91%E6%98%9F/id1550577799",
			playstore:
				"https://play.google.com/store/apps/details?id=com.kyle65463.japanese_memorizer",
		},
		{
			title: "Cuby - 魔術方塊計時器",
			content: (
				<>
					<p>
						「Cuby」是一個魔術方塊計時器
						App，以「簡潔」作為核心的設計理念。除了提供精美的統計圖表，還有許多方便的快捷手勢可以快速刪除紀錄或打亂新的方塊等功能。
					</p>
					<br />
					<p>
						這個 App 的靈感來自於 Twisty Timer，並且還在開發中，一樣使用了 Flutter/Dart
						作為開發框架，目前只支援生成 3x3x3 方塊的打亂步驟。
					</p>
				</>
			),
			image: "/projects/cube-timer.png",
			github: "https://github.com/kyle65463/cube-timer",
			appstore: "https://apps.apple.com/us/app/cuby-intuitive-cube-timer/id1583455340",
			playstore: "https://play.google.com/store/apps/details?id=com.kyle65463.cubetimer",
		},
		{
			title: "皇輿爭霸 Dominion",
			content: (
				<>
					<p>
						在台大基礎物件導向程式設計 (FOOP)
						課程的期末專題作品。皇輿爭霸是一款經典的卡牌桌遊，我們依照它的規則復刻出了電腦版，並且可以與其他玩家線上進行遊戲。皇輿爭霸是一款構造牌組的遊戲，藉由購買卡片擴展牌組，組成不同的
						combo，獲得分數而贏得勝利。
					</p>
					<br />
					<p>
						在開發上我們主要程式語言使用 Java 進行物件導向的設計，並搭配 JavaFX 作為 GUI
						框架。連線方面使用 Java 內建的 web socket，原始碼總行數高達六千多行。
					</p>
					<br />
					<p>組員： kyle65463、smile04455660、misterSu514</p>
					<p>
						Demo影片：{" "}
						<a
							className="text-primary"
							href="https://www.youtube.com/watch?v=gHtup-ZRhrU"
						>
							https://www.youtube.com/watch?v=gHtup-ZRhrU
						</a>
					</p>
					<p>
						正版遊戲網站連結：{" "}
						<a className="text-primary" href="https://dominion.games/">
							https://dominion.games/
						</a>
					</p>
				</>
			),
			image: "/projects/dominion.png",
			github: "https://github.com/kyle65463/dominion",
		},
		{
			title: "JS Tetris",
			link: "https://kyle65463.github.io/js-tetris/",
			content: (
				<>
					<p>
						復刻經典遊戲「Tetris」俄羅斯方塊，使用純 Javascript + HTML canvas
						開發，當作一個練習 Javascript 的簡單小專案。
					</p>
					<br />

					<span>遊戲玩法：</span>
					<ul>
						<li>- 左右方向鍵：控制方塊左右移動 </li>
						<li>- 上方向鍵：控制方塊旋轉</li>
						<li>- 空白鍵直接落下方塊至最底層</li>
						<li>- c：儲存/交換方塊</li>
						<li>- esc：暫停遊戲</li>
					</ul>
					<br />
					<p>
						遊戲連結：{" "}
						<a className="text-secondary" href="https://kyle65463.github.io/js-tetris/">
							https://kyle65463.github.io/js-tetris/
						</a>
					</p>
				</>
			),
			image: "/projects/js-tetris.png",
			github: "https://github.com/kyle65463/js-tetris",
		},
		{
			title: "個人部落格",
			content:
				"現在看到的這個網站，用來分享、紀錄一些學習上的心得，目前主要以 Flutter 相關教學為主，未來也許會更新一些不同方向的文章。開發上，前端使用了 React.js + Next.js + Tailwind CSS，並用 Vercel 架設網站。",
			image: "/projects/bird.png",
			github: "https://github.com/kyle65463/tech-blog",
		},
	];
	return (
		<div className="pt-24">
			{projects.map((project, index) => (
				<ProjectSection {...project} key={index} transparent={index % 2 == 0} />
			))}
		</div>
	);
}
