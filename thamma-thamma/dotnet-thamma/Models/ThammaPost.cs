using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace thamma.Models;

public class Post
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("title")]
    public string title { get; set; } = null!;

    [BsonElement("content")]
    public string content { get; set; } = null!;

    [BsonElement("img")]
    public string img { get; set; } = null!;

    [BsonElement("comments")]
    public string[][] comments { get; set; } = null!;

    [BsonElement("like")]
    public int like { get; set; } = 0;

    [BsonElement("username")]
    public string username { get; set; } = null!;

    [BsonElement("tag")]
    public string tag { get; set; } = null!;

    [BsonElement("date")]
    public DateTime date { get; set; } 
}