using System;

namespace AureliaDotnetTemplate.Data
{
    interface IDatabase
    {
        string ConnectionString { get; set; }
        string Database { get; }
        void Open();
        void Close();
    }
}
