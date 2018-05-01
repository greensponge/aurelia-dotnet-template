using System;

namespace AureliaDotnetTemplate.Data
{
    interface IDatabase : IDisposable
    {
        string ConnectionString { get; set; }
        string Database { get; }
        void Open();
        void Close();
    }
}
