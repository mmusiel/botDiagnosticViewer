var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/diagnostics/bolt", () =>
{
    var myBolt = new Bolt("Titanium", 2.0, 0.8, "A9A9A9");

    return myBolt;
});

app.Run();

public record Bolt(string Material, double ShaftLength, double HeadRadius, string HexColor);