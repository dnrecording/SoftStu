using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace thamma.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("username")]
    public string username { get; set; } = null!;

    [BsonElement("password")]
    public string password { get; set; } = null!;

    [BsonElement("email")]
    public string email { get; set; } = null!;

    [BsonElement("fname")]
    public string fname { get; set; } = null!;

    [BsonElement("lname")]
    public string lname { get; set; } = null!;
    
    [BsonElement("img")]
    public string img {get; set;} = null!;
}