package mk.finki.ukim.infobank.UpdateDB.HTTP;

import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

public class OverpassHttpRequest {
    private static final String OVERPASS_API = "http://www.overpass-api.de/api/interpreter";

    public static final String bankQuery = "[out:xml];\n" +
            "area(3600062649);\n" +
            "\tnode[\"amenity\"=\"bank\"](41.739553198140634,21.177520751953125,42.19189902447192,21.68701171875);\n" +
            "\tout;\n" +
            "out body;";

    public static final String atmQuery = "[out:xml];\n" +
            "area(3600062649);\n" +
            "\tnode[\"amenity\"=\"atm\"](41.739553198140634,21.177520751953125,42.19189902447192,21.68701171875);\n" +
            "\tout;\n" +
            "out body;";

    public static InputStream httpRequest(String query) throws IOException, ParserConfigurationException, SAXException {
        String hostname = OVERPASS_API;

        URL osm = new URL(hostname);
        HttpURLConnection connection = (HttpURLConnection) osm.openConnection();
        connection.setRequestMethod("POST");
        connection.setDoInput(true);
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

        DataOutputStream printout = new DataOutputStream(connection.getOutputStream());
        printout.writeBytes("data=" + URLEncoder.encode(query, StandardCharsets.UTF_8));
        printout.flush();
        printout.close();

        return connection.getInputStream();
    }
}
