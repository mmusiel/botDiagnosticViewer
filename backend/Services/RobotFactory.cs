
public static class RobotFactory
{
    public static RobotNode GetBlockoutRobot()
    {
        var robotRoot = new RobotNode 
        {
            Id = 1,
            PartName = "Torso",
            PartShape = ShapeType.Box,
            Dimensions = new float[] { 2.0f, 3.0f, 1.0f },
            
            Children = new List<RobotNode> 
            {
                new RobotNode 
                {
                    Id = 2,
                    PartName = "LeftUpperArm",
                    PartShape = ShapeType.Cylinder,
                    Dimensions = new float[] { 0.5f, 2.0f },
                    Position = new float[] { -1.5f, 1.0f, 0.0f }
                },
                new RobotNode
                {
                    Id = 3,
                    PartName = "RightUpperArm",
                    PartShape = ShapeType.Cylinder,
                    Dimensions = new float[] { 0.5f, 2.0f },
                    Position = new float[] { 1.5f, 1.0f, 0.0f }
                }
            }
        };

        return robotRoot; 
    }
}