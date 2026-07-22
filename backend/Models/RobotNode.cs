
public enum ShapeType
{
    Box,
    Cylinder,
    Sphere
}

public class RobotNode
{
    // Identity
    public int Id { get; set; }
    public string PartName { get; set; } = string.Empty;


    // Visual Primitive
    public ShapeType PartShape { get; set; }
    public float[] Dimensions { get; set; } = Array.Empty<float>(); // e.g. [width, height, depth] or [radius, height]

    // Hierarchy (The N-ary Tree mechanism)
    public List<RobotNode> Children { get; set; } = new List<RobotNode>();

    // Transform
    public float[] PivotPosition { get; set; } = new float[3];
    public float[] JointRotation { get; set; } = new float[3];
}