
	const WebSocket = require("ws");

	const wss = new WebSocket.Server({ port: 8080 }); // Chạy trên cổng 8080
	let clients = new Set();

	wss.on("connection", (ws) => {
		clients.add(ws);
		console.log(`Client connected. Online users: ${clients.size}`);

		// Gửi số lượng người dùng đang online
		broadcastUserCount();

		// Lắng nghe khi client đóng kết nối
		ws.on("close", () => {
			clients.delete(ws);
			console.log(`Client disconnected. Online users: ${clients.size}`);
			broadcastUserCount();
		});
	});

	// Hàm gửi số lượng người dùng đến tất cả client
	function broadcastUserCount() {
		const message = JSON.stringify({ event: "update_user_count", count: clients.size });
		clients.forEach((client) => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	}

	console.log("WebSocket server đang chạy trên ws://localhost:8080");


