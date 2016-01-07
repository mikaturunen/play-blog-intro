package models;

import java.util.*;
import javax.persistence.*;
import com.avaje.ebean.Model;

@Entity
public class User extends Model {
	@Id
	public Long id;
}
