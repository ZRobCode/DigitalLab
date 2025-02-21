
export default async function handler(req, res) {
  const BEEHIIV_API_KEY = "X0V45kSNpNG635jKubweRmJOTmzHpweJy69pCBW6jLSnZsAZ4WVlTn2k6tVdAKxB";
  const PUBLICATION_ID = "5eba1156-dca8-4e51-a0ca-4bab4bfd7938";
  const BEEHIIV_API_URL = `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/posts`;

  try {
    const response = await fetch(BEEHIIV_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEEHIIV_API_KEY}`,
      },
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch posts from Beehiiv" });
    }

    const data = await response.json();
    return res.status(200).json({ posts: data.data });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
