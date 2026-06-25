var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll", policy => {
        policy.AllowAnyOrigin();
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

app.MapGet("/api/diagnostics/bolt", () =>
{
    var myBolt = new Bolt("Titanium", 6.0, 2.5, "FF0000");
    return myBolt;
});

app.Run();

public record Bolt(string Material, double ShaftLength, double HeadRadius, string HexColor);